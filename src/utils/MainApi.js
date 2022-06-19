class MainApi {
  constructor({address}) {
    this._address = address;
  }

  _promiseResult(promise) {
    return promise.then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject(`Ошибка: ${result.status}`);
      }
    })
  }

  getUserInfo() {
    return this._promiseResult(fetch(`${this._address}users/me`, {
      credentials: 'include',
      headers: {
        method: 'GET',
      }
    }))
  }

  editProfile(userData) { //email, name  требуется проверить работу.
    return this._promiseResult(fetch(`${this._address}users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }))
  }

  getMovies() {
    return this._promiseResult(fetch(`${this._address}movies`, {
      credentials: 'include'
    }))
  }


  addMovie(movieData) {
    return this._promiseResult(fetch(`${this._address}movies`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(movieData)
    }))
  }

  removeMovie(movieData) {
    return this._promiseResult(fetch(`${this._address}cards/${movieData}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      }
    }))
  }
}

const api = new MainApi({
  address: 'http://localhost:3001/'
});
export default api;
