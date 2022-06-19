class Auth {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
    this._headers = {
      'Content-Type': 'application/json'
    };

  }

  _promiseResult(promise){
    return promise.then(result => {
      if (result.ok) {
        return result.json();
      } else {
        return Promise.reject(`Ошибка: ${result.status}`);
      }
    })
  }

  checkToken(){
    return this._promiseResult(fetch(`${this._baseUrl}users/me`, {
      credentials: 'include',
      headers: {
        method: 'GET',
      }
    }))
  }

  authorize(email, password){
    return this._promiseResult(fetch(`${this._baseUrl}signin`, {
      method: 'POST',
      credentials: 'include',
      headers: {...this._headers},
      body: JSON.stringify({email, password})
    }))
  }

  logOff(){
    return this._promiseResult(fetch(`${this._baseUrl}signout`, {
      method: 'POST',
      credentials: 'include',
      headers: {...this._headers}
    }))
  }

  register(email, password){
    return this._promiseResult(fetch(`${this._baseUrl}signup`, {
      method: 'POST',
      headers: {...this._headers},
      body: JSON.stringify({password, email})
    }))
  }
}

const auth = new Auth('http://localhost:3001/');
//http://localhost:3000/
//https://auth.nomoreparties.co/
//https://api.vabatmanov.nomoredomains.work/
//https://api.vabatmanovdip.nomoredomains.work/api/  это на сервере
export default auth;
