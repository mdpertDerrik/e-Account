using { com.mdpert as my } from '../db/accountMaster';
service accountService  { 
  entity AccountMaster as projection on my.AccountMaster;
  entity AccountSpec as projection on my.AccountSpec;
}