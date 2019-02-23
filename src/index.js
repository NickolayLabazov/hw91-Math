import { Magician, Daemon } from './function';

const daemon = new Daemon();
daemon.attack = 5;
console.log(daemon.attack);

const magician = new Magician();
magician.stoned = 'stoned';
magician.attack = 2;
console.log(magician.attack);
