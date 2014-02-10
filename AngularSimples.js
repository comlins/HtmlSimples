function SettingsController1() {
  this.nome = "Fulano de Tal";
  this.contacts = [
    {type: 'telefone', value: '9 9999-9999'},
    {type: 'email', value: 'fulano@tal.com.br'} ];
  };
  
  SettingsController1.prototype.alerta = function() {
  alert(this.nome);
};


SettingsController1.prototype.addContact = function() {
  this.contacts.push({type: '', value: ''});
};
 
 
SettingsController1.prototype.removeContact = function(contactToRemove) {
 var index = this.contacts.indexOf(contactToRemove);
  this.contacts.splice(index, 1);
};
 
 
SettingsController1.prototype.clearContact = function(contact) {
  contact.type = 'telefone';
  contact.value = '';
};