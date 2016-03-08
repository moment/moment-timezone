import moment from 'moment';
import attach from './moment/attach';
import data from './data/latest';

attach(moment).load(data);

export default moment;
