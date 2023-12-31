import React from "react";

const Pofeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <div className="badge">
            <div className="contentBx">
              <div className="imgBx">
                <h1> {data.name} </h1>
                <img
                  className="pokeimage"
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                  alt=""
                />
                <div className="infoBx">
                <div className="abilities">
                  {data.abilities.map((poke) => {
                    return (
                      <>
                        <div className="group">
                          <h2>{poke.ability.name}</h2>
                        </div>
                      </>
                    );
                  })}

                  <div className="group">
                    <h2>solar-power</h2>
                  </div>
                </div>
                <div className="base-set">
                  {data.stats.map((poke) => {
                    return (
                      <>
                        <h3>
                          {poke.stat.name} : {poke.base_stat}
                        </h3>
                      </>
                    );
                  })}
                </div>
              </div>
              </div>

              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Pofeinfo;
