import moment from 'moment';
import attach from './moment/attach';
import packed from './data/packed';

attach(moment).load(packed);

export default moment;
