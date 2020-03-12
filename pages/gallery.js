import Link from 'next/link'
import {ImageList,ImageListImage,ImageListItem} from '@rmwc/image-list'
function gallery(){
     return (
         <> 
           <ImageList
              masonry
              style={{columnCount: 3,
              columGap:'2px',
              maxWidth:'1000px'}}>
                
              {[
                '/images/skymin.png',
                '/images/mercyEmote1.png'
              ].map(src => (
                <ImageListItem key={src} style={{ marginBottom: '16px' }}>
                  <ImageListImage src={src} />
                </ImageListItem>
              ))}
                
            </ImageList>          
                   
         
         
         </>

        

     )
}
export default gallery