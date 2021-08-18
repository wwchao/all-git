
class db {
  db = null
  constructor() {
    this.init()
  }

  init () {
    const request = indexedDB.open('myDatabase', 3)
    request.addEventListener('upgradeneeded', e => {
      this.db = e.target.result
      this.db.createObjectStore('Users', { keyPath: 'userId', autoIncrement: false })
      console.log('创建对象仓库成功')
    })
    request.addEventListener('success', e => {
      this.db = e.target.result;
      console.log(this.db)
    })
  }

  add (tb, data) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(tb,'readwrite').objectStore(tb).add(data);
      tx.onsuccess = (e) => {
        resolve(e.target.result)
      }
      tx.onerror = (e) => {
        reject(e)
      }
    })
  }

  delete (tb, key) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(tb,'readwrite').objectStore(tb).delete(key);
      tx.onsuccess = (e) => {
        resolve(e.target.result)
      }
      tx.onerror = (e) => {
        reject(e)
      }
    })
  }

  put (tb, data) {
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(tb,'readwrite').objectStore(tb).put(data);
      tx.onsuccess = (e) => {
        resolve(e.target.result)
      }
      tx.onerror = (e) => {
        reject(e)
      }
    })
  }
}

export default db
