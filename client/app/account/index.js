import { StorageService } from './services/StorageService';
import { RequestService } from './services/RequestService';
import { UserService } from './services/UserService';

const AUTH_PROVIDERS = [StorageService, RequestService, UserService];

export {
  StorageService,
  RequestService,
  UserService,
  AUTH_PROVIDERS
};
