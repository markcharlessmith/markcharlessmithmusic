import React from 'react'
import './compositions.css'

const Compositions = () => {
  return (
    <div className='Compositions'>
      <h2>Compositions</h2>
      <div className='Compositions-table'>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Instrumentation</th>
              <th>Year</th>
            </tr>
      </thead>
      <tbody>
      <tr>
          <td>Where Light Exists...</td>
          <td>Guitar</td>
          <td>2021</td>
        </tr>
        <tr>
          {/* <td>Three Pieces for Piano<br></br>I. Arpeggiato<br></br>II. Album Leaf<br></br>III. Adventure Awaits!</td> */}
          <td>Three Pieces for Piano
            <div className='subfield'>
            I. Arpeggiato<br></br>II. Album Leaf<br></br>III. Adventure Awaits!
            </div>
          </td>
          <td>Piano</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Skógar</td>
          <td>Guitar</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Eclogue</td>
          <td>Guitar</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Distant Cicadas</td>
          <td>Guitar</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>A Good Problem to Have</td>
          <td>Clarinet and Two Guitars</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>Lullaby</td>
          <td>Guitar</td>
          <td>2019</td>
        </tr>
        <tr>
          <td>Late December Dusk</td>
          <td>Guitar Duo</td>
          <td>2018</td>
        </tr>
        <tr>
          <td>We Are All In This Together</td>
          <td>Solo Guitarist with Guitar Ensemble</td>
          <td>2017</td>
        </tr>
        <tr>
          <td>Daybreak Fanfare</td>
          <td>Guitar Trio</td>
          <td>2016</td>
        </tr>
        <tr>
          <td>Sonata No. 3 for Guitar</td>
          <td>Guitar</td>
          <td>2015</td>
        </tr>
        <tr>
          <td>Earthrise</td>
          <td>Guitar</td>
          <td>2013</td>
        </tr>
        <tr>
          <td>Stargazers</td>
          <td>Guitar</td>
          <td>2013</td>
        </tr>
        <tr>
          <td>Triptych
          <div className='subfield'>
          I. Ritmico<br></br>II. Adagio<br></br>III. Fugue
          </div>
          </td>
          <td>Guitar Trio<br></br>arr. Piano</td>
          <td>2012<br></br>2021</td>
        </tr>
        <tr>
          <td>Twelve Etudes for Guitar
            <div className='subfield'>
            No. 1<br></br>No. 2<br></br>No. 3<br></br>No. 4<br></br>No. 5<br></br>No. 6<br></br>No. 7<br></br>No. 8<br></br>No. 9<br></br>No. 10<br></br>No. 11<br></br>No. 12
            </div>
            </td>
          <td>Guitar</td>
          <td>2010</td>
        </tr>
        <tr>
          <td>Sonata No. 2 for Guitar
            <div className='subfield'>
            I. Boulder<br></br>II. Fantasy<br></br>III. Aspens
            </div>
            </td>
          <td>Guitar</td>
          <td>2008</td>
        </tr>
        <tr>
          <td>Mountain Standard Time
            <div className='subfield'>
            I. Capulin Volcano<br></br>II. St. Vrain Mountain
            </div>
            </td>
          <td>Guitar Quartet</td>
          <td>2007</td>
        </tr>
        <tr>
          <td>Four Pieces for Guitar
            <div className='subfield'>
              I. Improvisation<br></br>II. Idyll<br></br>III. Meditation<br></br>IV. Eventide
              </div> 
              </td>
          <td>Guitar</td>
          <td>2006</td>
        </tr>
        <tr>
          <td>Sonata for Flute and Piano
          <div className='subfield'>
            I. Allegro con spirito<br></br>II. Largo - Allegro vivo e festivamente
            </div>
            </td>
          <td>Flute and Piano</td>
          <td>2004</td>
        </tr>
        <tr>
          <td>Sonata No. 1 for Guitar
            <div className='subfield'>
            I. Con spirito<br></br>II. Meditation<br></br>III. Toccata Blues
            </div>
            </td>
          <td>Guitar</td>
          <td>2008</td>
        </tr>
        <tr>
          <td>Suite in b minor
          <div className='subfield'>
            I. Allemande<br></br>II. Corrente/Saltarello/Scherzo<br></br>III. Sarabande<br></br>IV. Gavotte<br></br>V. Sicilienne<br></br>VI. Gigue
              </div>
            </td>
          <td>Guitar Duo<br></br>arr. Guitar Quartet<br></br>arr. Piano</td>
          <td>2002<br></br>2004<br></br>2020</td>
        </tr>
        <tr>
          <td>Two Pieces for Flute, Oboe, and Bassoon
            <div className='subfield'>
            I. Twilight Tangerine<br></br>II. A Canadian in Paris, TX
              </div> 
            </td>
          <td>Flute, Oboe, and Bassoon</td>
          <td>2002</td>
        </tr>
        <tr>
          <td>Travelogue
            <div className='subfield'>
            I. Top of the World<br></br>II. Eternal Mirage<br></br>III. Boundlessness
            </div>
            </td>
          <td>Voice and Piano</td>
          <td>2002</td>
        </tr>
        <tr>
          <td>Sonata for Piano</td>
          <td>Piano</td>
          <td>2001</td>
        </tr>
        <tr>
          <td>Three Preludes for Guitar</td>
          <td>Guitar</td>
          <td>2001</td>
        </tr>
        <tr>
          <td>Five Preludes for Piano</td>
          <td>Piano</td>
          <td>2000</td>
        </tr>
        <tr>
          <td>Larghetto for Violin and Two Guitars</td>
          <td>Violin and Two Guitars</td>
          <td>1998</td>
        </tr>
      </tbody>
    </table>
      </div>
    </div>
  )
}

export default Compositions
