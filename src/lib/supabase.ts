type Row = Record<string, any>;

class TableQuery {
  private rows: Row[];

  constructor(rows: Row[]) {
    this.rows = rows;
  }

  select(_columns = '*') {
    return this;
  }

  order(_column: string, _options?: { ascending?: boolean }) {
    return Promise.resolve({ data: this.rows, error: null });
  }

  maybeSingle() {
    return Promise.resolve({ data: this.rows[0] ?? null, error: null });
  }

  insert(newRows: Row[]) {
    this.rows.push(...newRows);
    return Promise.resolve({ error: null });
  }

  update(_updatedRow: Row) {
    return {
      eq: (_column: string, _value: any) => Promise.resolve({ error: null })
    };
  }

  delete() {
    return {
      eq: (_column: string, _value: any) => Promise.resolve({ error: null })
    };
  }
}

class FakeSupabase {
  private tables = new Map<string, Row[]>();

  private getTable(name: string) {
    if (!this.tables.has(name)) {
      this.tables.set(name, []);
    }
    return this.tables.get(name)!;
  }

  from(name: string) {
    return new TableQuery(this.getTable(name));
  }

  auth = {
    async getSession() {
      return { data: { session: null }, error: null };
    },
    onAuthStateChange(
      _callback: (_event: string, _session: any) => void
    ) {
      return {
        data: {
          subscription: {
            unsubscribe() {
              // no-op
            }
          }
        }
      };
    },
    async signInWithPassword(_params: { email: string; password: string }) {
      return { data: null, error: null };
    },
    async signOut() {
      return { error: null };
    }
  };
}

export const supabase: any = new FakeSupabase();
