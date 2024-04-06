import React, { useState } from "react";
import "../styles/about.css"; // Import the CSS file

function About() {
  const contactPersons = [
    {
      name: "Atharv",
      image: require("../images/pranil&sohel.png"),
      information: "Backend developer (STS).",
    },
     {
      name: "Noman",
      image: require("../images/pranil&sohel.png"),
      information: "Noman is our expert in Front-end Developer.",
    },
     {
      name: "Pradyumna",
      image: require("../images/pranil&sohel.png"),
      information: "Pradyumna specializes in furniture customization.",
    },
    {
      name: "Shantanu",
      image: require("../images/pranil&sohel.png"),
      information: "Shantanu is  Front-end developer.",
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);

  const handlePersonClick = (index) => {
    setSelectedPerson(index);
  };

  return (
    <div className="about-us">
      <div className="content">
        <h2>About Us</h2>
        <p>
          At Homely Services, we believe that your home is a reflection of your
          aspirations and dreams. Our team of passionate professionals is
          committed to transforming houses into welcoming sanctuaries.
        </p>
        <p>
          With our dedication to quality, innovation, and customer
          satisfaction, we have become a trusted partner in enhancing your
          living space. Our mission is to provide you with seamless access to a
          wide range of home services, from repairs and renovations to design
          and decor.
        </p>
        <div className="contact-persons">
          {contactPersons.map((person, index) => (
            <div
              className={`person ${selectedPerson === index ? "active" : ""}`}
              key={index}
              onClick={() => handlePersonClick(index)}
            >
              <img src={person.image} alt={person.name} />
              <p>{person.name}</p>
            </div>
          ))}
        </div>
        {selectedPerson !== null && (
          <div className="selected-person">
            <img
              src={contactPersons[selectedPerson].image}
              alt={contactPersons[selectedPerson].name}
            />
            <p className="name">{contactPersons[selectedPerson].name}</p>
            <p className="information">
              {contactPersons[selectedPerson].information}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;