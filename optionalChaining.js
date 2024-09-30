const petOwner = {
  name: "Jolonto kholil",
  contact: {
    phone: "329483",
    email: "xyz@gmail.com",
  },
  pet: {
    name: "Lofie",
    info: {
      color: "black",
      weight: "1.2kg",
    },
  },
  food: ["apple", "orange", "papaya"],
};

// console.log(petOwner.contact.phone);
// console.log(petOwner.pet.info.color);

// console.log(petOwner.address);
// console.log(petOwner.address.houseNo);

// optional chaining => ?.
// console.log(petOwner.address);
// console.log(petOwner.address?.houseNo);
console.log(petOwner?.food[2]);
