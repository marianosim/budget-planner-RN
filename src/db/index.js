import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('expenses.db');

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS expenses (id INTEGER PRIMARY KEY NOT NULL, title TEXT NOT NULL, amount INTEGER NOT NULL, category INTEGER NOT NULL, type TEXT NOT NULL, image TEXT NOT NULL, address TEXT NOT NULL, coords TEXT NOT NULL, date INTEGER NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const insertExpense = (title, amount, category, type, image, address, coords, date) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO expenses (title, amount, category, type, image, address, coords, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [title, amount, category, type, image, address, JSON.stringify(coords), date],
        (_, result) => {
          resolve(result);
          console.log('expense created!');
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const selectExpensesFromDB = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM expenses',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });

  return promise;
};

export const updateExpense = (id, image, address, coords) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'UPDATE expenses SET image = ?, address = ?, coords = ? WHERE id = ?',
        [image, address, JSON.stringify(coords), id],
        (_, result) => {
          resolve(result);
          console.log('expense updated!');
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const selectLastExpenseFromDB = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM expenses ORDER BY id DESC LIMIT 1',
        [],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const selectSingleExpenseFromDB = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM expenses WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result);
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};

export const deleteExpenseFromDB = (id) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'DELETE FROM expenses WHERE id = ?',
        [id],
        (_, result) => {
          resolve(result);
          console.log('expense deleted!');
        },
        (_, err) => {
          reject(err);
        }
      );
    });
  });
  return promise;
};
