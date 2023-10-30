import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    console.log("set", key, value);
    this._storage?.set(key, value);
  }

  public get(key: string) {
    console.log("get", key);
    return this._storage?.get(key);
  }

  public remove(key: string) {
    console.log("remove", key);
    this._storage?.remove(key);
  }
}