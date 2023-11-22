import { Link } from 'react-router-dom';
import './Scarface.css';

const public_route = process.env.PUBLIC_URL

function Scarface() {
  return (
    <div className="App">
          <div className="scarface-page">
            <section className="scarface-hero-section" style={{backgroundImage: `url(${public_route} /images/king.jpeg)`}}>
              <div className="scarface-hero-info-container">
                  <div className="scarface-image">
                      <img className="scarface-img-logo" src="/images/scarface.jpeg" alt="Scarface Logo"></img>
                  </div>
                  <div className="scarface-title-info">
                      <h1 className='scarface-title'>Scarface</h1>
                      <div className='scarface-metadata-wrapper'>
                          <span className='scarface-metadata-wrapper-txt'>1983</span>
                          <span className='scarface-metadata-wrapper-infospacer'>|</span>
                          <span className='scarface-metadata-wrapper-txt-age'>18+</span>
                          <span className='scarface-metadata-wrapper-infospacer'>|</span>
                          <span className='scarface-metadata-wrapper-txt'>2h 49m</span>
                          <span className='scarface-metadata-wrapper-infospacer'>|</span>
                          <a className='scarface-metadata-wrapper-itemgenre' href='#'>Thrillers</a>
                      </div>
                      <div className='scarface-title-info-synopsis'>
                      In a ruthless rise to Miami drug lord, a Cuban-born gangster descends into addiction, 
                      obsession and brutality, with grisly consequences.
                      </div>
                      <div className='scarface-starring'>
                          <span className='scarface-starring-span'>Starring: </span>
                          <span className='scarface-starring-actors'>Al Pacino, Steven Bauer, Michelle Pfeiffer</span>
                      </div>
                  </div>
              </div>
              <div className='scarface-cta'>
                  <div className='scarface-cta-img'>
                      <img className='scarface-cta-image' src='/images/logo.jpeg' alt='Netflix Logo'></img>
                  </div>
                  <div className='scarface-watch-cta'>
                      <p className='scarface-cta-text'>Watch all you want.</p>
                        <Link to="/">
                            <button className='scarface-cta-btn'>Join now</button>
                        </Link>
                  </div>
              </div>
            </section>

            <section className='scarface-hook-section'>
              <div className='scarface-hook-hr'>
                  <hr></hr>
              </div>
              <div className='scarface-hook-text'>
                  <p className='scarface-hoot-p-text'>Al Pacino stars in this crime epic from director Brian 
                  De Palma and screenwriter Oliver Stone.</p>
              </div>
              <div className='scarface-hook-hr'>
                  <hr></hr>
              </div>
            </section>

            <section className='scarface-more-details-section'>
              <div className='scarface-more-details-header'>
                  <p className='scarface-more-details-p'>More Details</p>
              </div>
              <div className='scarface-more-details-container'>
                  <div className='scarface-md-wd-upper'>
                      <div className='scarface-md-wd-upper-left'>
                          <p className='scarface-md-p'>Watch offline</p>
                          <span className='scarface-md-span'>Download and watch everywhere you go.</span>
                      </div>
                      <div className='scarface-md-wd-upper-middle'>
                          <p className='scarface-md-p'>Genres</p>
                          <span className='scarface-md-span'>Classic Movies, Crime Movies, Drama Movies, Thriller Movies</span>
                      </div>
                      <div className='scarface-md-wd-upper-right'>
                          <p className='scarface-md-p'>This movie is...</p>
                          <span className='scarface-md-span'>Violent</span>
                      </div>
                  </div>
                  <div className='scarface-md-wd-lower'>
                      <div className='scarface-md-wd-lower-left'>
                          <p className='scarface-md-p'>Audio</p>
                          <span className='scarface-md-span'>English - Audio Description, English [Original], French</span>
                      </div>
                      <div className='scarface-md-wd-lower-middle'>
                          <p className='scarface-md-p'>Subtitles</p>
                          <span className='scarface-md-span'>Arabic, English, French</span>
                      </div>
                  </div>
              </div>
              <div className='scarface-more-details-cast'>
                  <p className='scarface-md-p'>Cast</p>
              </div>
              <div className='scarface-more-details-cast-info'>
                  <div className='scarface-more-details-cast-info-left'>
                      <span className='scarface-md-span'>Al Pacino</span>
                      <span className='scarface-md-span'>Mary Elizabeth Mastrantonio</span>
                      <span className='scarface-md-span'>Miriam Colon</span>
                      <span className='scarface-md-span'>Ángel Salazar</span>
                  </div>
                  <div className='scarface-more-details-cast-info-middle'>
                      <span className='scarface-md-span'>Steven Bauer</span>
                      <span className='scarface-md-span'>Paul Shenar</span>
                      <span className='scarface-md-span'>F. Murray Abraham</span>
                      <span className='scarface-md-span'>Pepe Serna</span>
                  </div>
                  <div className='scarface-more-details-cast-info-right'>
                      <span className='scarface-md-span'>Michelle Pfeiffer</span>
                      <span className='scarface-md-span'>Robert Loggia</span>
                      <span className='scarface-md-span'>Harris Yulin</span>
                  </div>
              </div>
            </section>

            <section className='scarface-more-movies-section'>
              <div className='scarface-more-movies-header'>
                <Link to="/movies">
                  <p className='scarface-more-details-p'>More Like This</p>
                </Link>
              </div>
              <div className='scarface-more-movies-library'>
                  <div className='scarface-more-movies-row'>
                      <img className='scarface-more-movies-img' src={public_route + "/images/casino.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/fightclub.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/godfather.jpeg"}  alt='img'></img>
                  </div>
                  <div className='scarface-more-movies-row'>
                      <img className='scarface-more-movies-img' src={public_route + "/images/godfather coda.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/HEAT.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/Inglourios.jpeg"}  alt='img'></img>
                  </div>
                  <div className='scarface-more-movies-row'>
                      <img className='scarface-more-movies-img' src={public_route + "/images/irishman.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/jahim.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/king.jpeg"}  alt='img'></img>
                  </div>
                  <div className='scarface-more-movies-row'>
                      <img className='scarface-more-movies-img' src={public_route + "/images/leo.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/casino.jpeg"}  alt='img'></img>
                      <img className='scarface-more-movies-img' src={public_route + "/images/taxi driver.jpeg"}  alt='img'></img>
                  </div>
              </div>
            </section>

            <section className='scarface-comingsoon-section'>
              <div className='scarface-more-movies-header'>
                  <p className='scarface-more-details-p'>Coming Soon</p>
              </div>
              <div className='scarface-comingsoon-container'>
                  <div className='scarface-comingsoon-left-column'>
                      <div className='avatar-cell'>
                          <span className='scarface-md-span avatarcell-s'>Avatar The Last Airbender</span>
                          <p className='scarface-md-p'>Water. Earth. Fire. Air. Long ago, the four nations lived together in harmony — 
                          then everything changed. A live-action adaptation of Aang's story.</p>
                      </div>
                      <div className='avatar-cell'>
                          <span className='scarface-md-span avatarcell-s'>Code 8 Part II</span>
                          <p className='scarface-md-p'>In a world where superpowered people are heavily policed by robots, an ex-con teams 
                          up with a drug lord he despises to protect a teen from a corrupt cop.</p>
                      </div>
                      <div className='avatar-cell'>
                      <span className='scarface-md-span avatarcell-s'>Within Sand</span>
                          <p className='scarface-md-p'>Ambushed by robbers, a stranded young merchant traverses the scorching 
                          desert to get home to his pregnant wife — accompanied by an unexpected friend.</p>   
                      </div>
                  </div>
                  <div className='scarface-comingsoon-middle-column'>
                      <div className='avatar-cell'>
                          <span className='scarface-md-span avatarcell-s'>Heeramandi</span>
                          <p className='scarface-md-p'>Sanjay Leela Bhansali brings his majestic signature flair to stories of love and 
                          betrayal in the lives of courtesans in pre-independence India.</p>
                      </div>
                      <div className='avatar-cell'>
                          <span className='scarface-md-span avatarcell-s'>Squid Game: The Challenge</span>
                          <p className='scarface-md-p'>Immersed in the world of "Squid Game," 456 real players put their skills
                          — and character — to the ultimate test for a life-changing $4.56 million prize.</p>
                      </div>
                      <div className='avatar-cell'>
                      <span className='scarface-md-span avatarcell-s'>Yu Yu Hakusho</span>
                          <p className='scarface-md-p'>After a selfless act costs him his life, teen delinquent Yusuke Urameshi is chosen 
                          as a Spirit Detective to investigate cases involving rogue yokai.</p>   
                      </div>
                  </div>
                  <div className='scarface-comingsoon-right-column'>
                      <div className='avatar-cell'>
                          <span className='scarface-md-span avatarcell-s'>3 Body Problem</span>
                          <p className='scarface-md-p'>A fateful decision in 1960s China echoes across space and time to a group of scientists 
                          in the present, forcing them to face humanity's greatest threat.</p>
                      </div>
                      <div className='avatar-cell'>
                          <span className='scarface-md-span avatarcell-s'>Chicken Run: Dawn of the Nugget</span>
                          <p className='scarface-md-p'>A band of fearless chickens flock together to save poultry-kind from an 
                          unsettling new threat: a nearby farm that's cooking up something suspicious.</p>
                      </div>
                  </div>
              </div>
            </section>

            <section className='scarface-promo-section'>
              <div className='scarface-promo-container'>
                  <div className='scarface-promo-text'>
                  Go behind the scenes of Netflix TV shows and movies, see what's coming soon and watch bonus videos on Tudum.com.
                  </div>
              </div>
            </section>
        </div>
    </div>
  );
}

export default Scarface;