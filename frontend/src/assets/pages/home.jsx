import React from 'react';
import { Body } from '../styles/bodyStyle';
import DarkWhite from '../components/darkWhite';

const Home = () => {
  return (
    <Body>
      <DarkWhite />
      <section className='Content'>
        <h1>Short URL</h1>
        <div className='TransformText'>
          <form action="submit">
            <label htmlFor="Transform your URL">Transform your URL</label>
            <div className='inputsTransform'> 
              <input className='URLTransform' type="text" placeholder='Transform your URL' />
              <input className='ButtonTransform' type='submit' />
            </div>
          </form>
        </div>
        <button className='GitHub'>Code Github</button>
      </section>
    </Body>
  );
}

export default Home;
