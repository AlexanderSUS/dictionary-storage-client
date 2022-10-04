import api from 'api';
import { AxiosResponse } from 'axios';
import { ApiEnpoint } from 'const/api';
import { PublicWord } from 'types/api';

export default class PublicService {
  static findWord(word: string): Promise<AxiosResponse<PublicWord>> {
    return api.post(`${ApiEnpoint.public}/${ApiEnpoint.words}`, { word });
  }
}
