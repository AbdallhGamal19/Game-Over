import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import style from './Dropdown.module.css'

function Dropdownn() {

  return (
    <>
    <Dropdown>
      <Dropdown.Toggle className={`${style.links} `} variant="success" id="dropdown-basic">
        platforms
      </Dropdown.Toggle>
      <Dropdown.Menu className=''>
        <ul className='list-unstyled'>
          <li className={`${style.list}`} ><Link className={ ` d-block text-decoration-none textColor`} to='pc'>pc</Link></li>
          <li className={`${style.list}`} ><Link className='d-block text-decoration-none textColor' to='browser'>browser</Link></li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className={`${style.links} `} variant="success" id="dropdown-basic">
        sort-by
      </Dropdown.Toggle>
      <Dropdown.Menu className=''>
        <ul className='list-unstyled '>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor' to='releaseData'>release-date</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor' to='popularity'>popularity</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor' to='alphabetical'>alphabetical</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor' to='relevance'>relevance</Link></li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown>
      <Dropdown.Toggle className={`${style.links} `} variant="success" id="dropdown-basic">
        categories
      </Dropdown.Toggle>
      <Dropdown.Menu className=' '>
        <ul className='list-unstyled mb-3  '>
          <li className={`${style.list}`} ><Link className='  d-block text-decoration-none textColor'  to='racing'>racing</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='sports'>sports</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='social'>social</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='shooter'>shooter</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='openWorld'>open-world</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='zombie'>zombie</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='actionRpg'>action-rpg</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='action'>action</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='flight'>flight</Link></li>
          <li className={`${style.list}`} ><Link className=' d-block text-decoration-none textColor'  to='battle'>battle</Link></li>
        </ul>
      </Dropdown.Menu>
    </Dropdown>
    </>
  );
}

export default Dropdownn;
 