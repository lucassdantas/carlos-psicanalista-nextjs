import React from 'react';

export default function teste() {
    return (
        <main>
          <iframe width="1920" height="750" src="https://www.youtube.com/embed/XDqEvmxnLeY" title="The easiest way to add videos in NextJs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          <video width="320" height="240" controls>
            <source src="/aropodometria.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
           
        </main>
    )
};