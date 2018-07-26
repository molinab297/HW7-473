class Store {
  constructor(storageApi) {
    this.api = storageApi;
  }

  get() {
    return this.api.getItem(this.key);
  }
  set(value) {
    this.api.setItem(this.key, value);
  }
}

export class UserStore extends Store {
  constructor(key) {
    // eslint-disable-next-line no-undef
    super(sessionStorage);
    this.key = key;
  }
}
