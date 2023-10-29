import React from 'react'

const facts = [
    '1. Pikachu wasn’t Pokémon’s original mascot',
'2. Rhydon is the 1st Pokémon ever created',
'3. Several characters hold Guinness World Records',
'4. Pikachu and Meowth have opposite Pokédex numbers',
'5. Pikachu was designed after a squirrel',
'6. There’s an enzyme named after Pikachu',
'7. Pikachu is featured on legal tender currency',
'8. Some Pokemon are eaten as delicacies',
'9. Slowbro has a chance of devolving',
'10. Poliwag’s spiral design references small intestines',
'11. Misty’s Psyduck mastered a basic skill ¾ into the anime',
'12. 1.99m difference between the shortest & tallest Pokémon',
'13. Some Pokémon breed both asexually & sexually',
'14. Plans for Dolly-inspired Pokémon were scrapped',
'15. Mew’s clone was registered in the Pokédex before Mew',
'16. Drowzee’s skill is derived from Japanese folklore',
'17. The creator of Pokémon was inspired by insect-catching',
'18. Tajiri’s idea was rejected multiple times',
'19. The anime was meant to be purely promotional',
'20. Ash’s Japanese name was inspired by the creator’s',
'21. Hitmonlee & Hitmonchan’s Japanese references',
'22. Magikarp’s signature move was translated badly',
'23. Pokémon’s full name is in English',
'24. There are Pokémon manhole covers in Japan',
'25. Several Pokémon are designed by a foreigner'
  ];

const PokeFacts=()=>{
  return (
    <div>
    <div className="pokemon-facts">
    {facts.map((fact, index) => (
      <div className="fact-card" key={index}>
        <p>{fact}</p>
      </div>
    ))}
  </div>
    </div>
  )
}

export default PokeFacts;
