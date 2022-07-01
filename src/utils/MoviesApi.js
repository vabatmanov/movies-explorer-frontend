class MoviesApi {
  constructor({address}) {
    this._address = address;
    this.url = 'https://api.nomoreparties.co';
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


  getMovies() {
    return this._promiseResult(fetch(`${this._address}`, {
      //credentials: 'include'
    }))
  }
}

const moviesApi = new MoviesApi({
  //address: 'http://localhost:3001/'
  address: 'https://api.nomoreparties.co/beatfilm-movies/'
});
export default moviesApi;
