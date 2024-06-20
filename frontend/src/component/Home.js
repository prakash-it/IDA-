import React from 'react';
import '../styles/Home.css';
import img1 from './img/Vid.png'
import img2 from './img/img2.webp'
export default function Home() {
  return (
    <>
        <div className='img'>
        <div className='overlay'>
          <div className='text-box'>
            <h1>Bringing Ideas To Our Reality</h1>
            <p> Bringing Ideas To Our Reality" (BITOR) is often associated with the creative process of transforming abstract concepts or visions into tangible outcomes or products. This process spans various fields including technology, business, art, and science. Here are some key details about how ideas are brought to reality.</p>
            <button class="styled-button">Visit us to know more</button>
          </div>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
        <img src={img1}  alt="vid" className='img1'/>
        </div>
       <div className='col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante ex, ullamcorper at egestas eu, congue rhoncus mi. Nulla facilisi. Aliquam congue suscipit diam in varius. Sed auctor hendrerit nibh eget condimentum. Pellentesque luctus interdum urna a aliquam. Aenean convallis odio lorem, non rutrum felis fringilla ullamcorper. Mauris dui libero, dapibus mattis sagittis non, fermentum non nibh. Donec faucibus pretium lorem, eu facilisis sapien accumsan quis. Nunc maximus dolor non nisl cursus, eu sagittis urna lacinia. Proin ornare nisi sed sapien mollis, at vulputate magna suscipit. Fusce sollicitudin erat ut cursus eleifend. Cras pulvinar nibh a rutrum feugiat. Etiam ultricies lacus lacus, ac lacinia nisl lacinia in. Praesent iaculis erat et lectus mollis, nec laoreet dolor aliquam.</p>
        </div>
      </div>

      <div className='row2'>
        <div className='col2'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante ex, ullamcorper at egestas eu, congue rhoncus mi. Nulla facilisi. Aliquam congue suscipit diam in varius. Sed auctor hendrerit nibh eget condimentum. Pellentesque luctus interdum urna a aliquam. Aenean convallis odio lorem, non rutrum felis fringilla ullamcorper. Mauris dui libero, dapibus mattis sagittis non, fermentum non nibh. Donec faucibus pretium lorem, eu facilisis sapien accumsan quis. Nunc maximus dolor non nisl cursus, eu sagittis urna lacinia. Proin ornare nisi sed sapien mollis, at vulputate magna suscipit. Fusce sollicitudin erat ut cursus eleifend. Cras pulvinar nibh a rutrum feugiat. Etiam ultricies lacus lacus, ac lacinia nisl lacinia in. Praesent iaculis erat et lectus mollis, nec laoreet dolor aliquam.</p>
        </div>
      </div>

      <div className='row'>
        <div className='col'>
        <img src={img2}  alt="vid" className='img1'/>
        </div>
       <div className='col'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ante ex, ullamcorper at egestas eu, congue rhoncus mi. Nulla facilisi. Aliquam congue suscipit diam in varius. Sed auctor hendrerit nibh eget condimentum. Pellentesque luctus interdum urna a aliquam. Aenean convallis odio lorem, non rutrum felis fringilla ullamcorper. Mauris dui libero, dapibus mattis sagittis non, fermentum non nibh. Donec faucibus pretium lorem, eu facilisis sapien accumsan quis. Nunc maximus dolor non nisl cursus, eu sagittis urna lacinia. Proin ornare nisi sed sapien mollis, at vulputate magna suscipit. Fusce sollicitudin erat ut cursus eleifend. Cras pulvinar nibh a rutrum feugiat. Etiam ultricies lacus lacus, ac lacinia nisl lacinia in. Praesent iaculis erat et lectus mollis, nec laoreet dolor aliquam.</p>
        </div>
      </div>

    </>
  )
}
