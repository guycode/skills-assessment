/* setup contacts info and table data */
var Contacts = [
  {
    name: 'Christian',
    email: 'christian@yahoo.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'available'
  },
  {
    name: 'Rich',
    email: 'rich@tripod.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'available'
  },
  {
    name: 'Scott',
    email: 'scott@mailinator.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'available'
  },
  {
    name: 'Danny',
    email: 'danny@hotmail.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'available'
  },
  {
    name: 'Taka',
    email: 'taka@myspace.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'unavailable'
  },
  {
    name: 'Tim',
    email: 'tim@netscape.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'away'
  },
  {
    name: 'Patrick',
    email: 'patrick@live.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'available'
  },
  {
    name: 'Jacques',
    email: 'jacques@aol.com',
    tel: '323-555-1234',
    street: '6539 Wilton Ave.',
    address: 'Culver City CA 90234',
    status: 'away'
  }
];

var buildContactsTable = function(table) {
  if (table !== true) {
    document.getElementById('contactType').value = 'email';
    Contacts.forEach(function(contact) {
      var row = document.createElement("tr");
      row.className += 'row';
      var who = document.createElement("td");
      who.className += 'name';
      var bulletStatus = document.createElement("div");
      bulletStatus.className += 'bulletStatus-' + contact.status;
      var what = document.createElement("td");
      what.className += "userData";
      var first = document.createTextNode(contact.name);
      var second = document.createTextNode(contact.email);
      who.appendChild(bulletStatus);
      who.appendChild(first);
      what.appendChild(second);
      row.appendChild(who);
      row.appendChild(what);
      table.appendChild(row);
  });
    return;
  }
}

/* dropdown selection */
var dropDownSelection = function(table) {
    var contactType = document.getElementById('contactType');
    contactType.addEventListener('click', function() {
      var selection = contactType.options[contactType.selectedIndex].value;
      selectionType(table, selection);
      var checkmark = document.createElement('p');
      selection.appendChild(document.createTextNode(checkmark('&#x2713')));
    });
  }

var selectionType = function(table, selection) {
  for (var row of table.childNodes) {
    var mainList = Array.prototype.indexOf.call(table.childNodes, row);
    row.childNodes[1].innerHTML = Contacts[mainList][selection];
  }
}

/* additional info on hover */
var hoverEffects = function(table) {
    for (var row of table.childNodes) {
      let rowIndex = Array.prototype.indexOf.call(table.childNodes, row);
      let section = row.childNodes[0];
      let contact = Contacts[rowIndex];
      section.addEventListener('mouseenter', function() {
        let screen = document.createElement('div');
        let hover = document.createElement('div');
        let emailHover = document.createElement('p');
        let telHover = document.createElement('p');
        let streetHover = document.createElement('p');
        let addressHover = document.createElement('p');

        screen.className += 'screen';
        hover.className += 'hover';

        emailHover.appendChild(document.createTextNode(contact.email));
        telHover.appendChild(document.createTextNode(contact.tel));
        streetHover.appendChild(document.createTextNode(contact.street));
        addressHover.appendChild(document.createTextNode(contact.address));
  
        hover.appendChild(emailHover);
        hover.appendChild(telHover);
        hover.appendChild(streetHover);
        hover.appendChild(addressHover);
  
        section.style.zIndex = '100';
        
        section.appendChild(hover);
        table.appendChild(screen);
      });
      section.addEventListener('mouseleave', function() {
        var screen = document.getElementsByClassName('screen')[0];
        var hover = section.childNodes[2];
  
        section.style.zIndex = '0';
        
        section.removeChild(hover);
        table.removeChild(screen);
      });
    }
  
  }

/* build widget on page load */
window.onload = function() {
  var table = document.getElementById('contactsList');
  buildContactsTable(table);
  hoverEffects(table);
  dropDownSelection(table);
};

'use strict';






