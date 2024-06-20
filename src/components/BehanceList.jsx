import React, { useState } from 'react';



import Modal from './like';






const Behance = () => {



  const [isModalOpen, setIsModalOpen] = useState(false);
  
  
  const [selectedImage, setSelectedImage] = useState({});


  const [likedImages, setLikedImages] = useState({});

  const open = (i) => {
    setSelectedImage(i); setIsModalOpen(true);
  };

  const close = () => {    setIsModalOpen(false);      setSelectedImage({});
  };

  const Likesssss = (imageSrc) => {    setLikedImages((prevLikedImages) => ({
      ...prevLikedImages   ,  


      [imageSrc]:!prevLikedImages[imageSrc]   


    }));

    
  };

  const i = [
    
    {
      src: "https://www.behance.net/ui/img/creator_pro/page_banner/6.webp",
      title: "Cayman Rum",
  
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9a3899200994549.Y3JvcCwxMDIyLDgwMCw4OCww.jpg",
      title: "Illustration Commissions",
    
    
    
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/22a18c200549747.Y3JvcCw2OTAyLDUzOTgsMCww.png",
      title: "ALT Systema",

    
    },
    {
      src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fa7695192733889.Y3JvcCwxMDA3LDc4OCwxOTcsMA.jpg",
      title: "Nike-LeBron 19",

    },
    {
        src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/3b5783200234379.Y3JvcCwzMDY4LDI0MDAsMCww.jpg",
        title: "Chichen Itza",

      },
      {
        src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDI4fHxuYXR1cmV8ZW58MHx8fHwxNjg3MDk1MDcw&ixlib=rb-4.0.3&q=80&w=400",
        title: "Colosseum Roma",
  
      },
      {
        src: "https://images.unsplash.com/photo-1478144592103-25e218a04891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxuYXR1cmV8ZW58MHx8fHwxNjg3MDk1MDcw&ixlib=rb-4.0.3&q=80&w=400",
        title: "Gravity Refulling System",
     
      },
      {
        src: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fG5hdHVyZXxlbnwwfHx8fDE2ODcwOTUwNzA&ixlib=rb-4.0.3&q=80&w=400",
        title: "San Francisco",

      }
      ,{
        src: "https://images.unsplash.com/photo-1478144592103-25e218a04891?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxuYXR1cmV8ZW58MHx8fHwxNjg3MDk1MDcw&ixlib=rb-4.0.3&q=80&w=400",
        title: "Chichen Itza",

      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cfd92f167512315.Y3JvcCw4MDgsNjMyLDAsMA.png",
        title: "Mojo in $alt House",

      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/0c631a192825119.Y3JvcCw0NTQ5LDM1NTgsMTcyMiw0NzI.jpg",
        title: "Ciphr",
     
      },
      {
        src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/7e7a37198555067.Y3JvcCw0MjAwLDMyODUsMCwyMA.png",
        title: "SaaS B2B Platform | UI",
  
      },
      {
          src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/29b774199723943.Y3JvcCwzMTc4LDI0ODYsMjUxLDgyNg.jpg",
          title: "heuler Brand IDENTITY",
       
        },
        {
          src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e20384200743165.Y3JvcCwxNjE2LDEyNjQsMCww.png",
          title: "Doner Typeface",
 
        },
        {
          src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/08b576195989545.Y3JvcCw4MDgsNjMyLDAsMA.png",
          title: "UI/UX Design",
   
        },
        {
          src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/17d5c5197095177.Y3JvcCwzNjAwLDI4MTUsMCw0NA.png",
          title: "ELUXIR | Landing Page",
        
        }
        ,{
            src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/2a6856201212623.Y3JvcCwxMDAyLDc4NCwxOTgsMA.png",
            title: "Ministère du Conseil exécutif ",

          },
          {
            src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b4ad63201283141.Y3JvcCwxMzk5LDEwOTUsMCww.png",
            title: "Identidade Visual: harmony",

          },
          {
            src: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30b5f6201283141.667340a2bab5f.png",
            title: "Sorek© | Brand identity ",
    
          },
          {
            src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/e5f5da167481201.Y3JvcCwyMDkwLDE2MzUsNSww.png",
            title: "Fuyu Brand Identity",
      
          },
          {
              src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/8ceb3e198629223.Y3JvcCw5MjYsNzI0LDE0OSw0NQ.jpg",
              title: "Marina - Orange",
           
            },
            {
              src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/232c80199327477.Y3JvcCwxMjAwLDkzOCwwLDExMg.png",
              title: "BVLGARI | 3D Perfume",
              
            },
            {
              src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/c7af61199788301.Y3JvcCwyNDc0LDE5MzUsMCw2Njc.jpg",
              title: "DIE ZEIT",
 
            },
            {
              src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/9c22f9199308845.Y3JvcCwzOTk5LDMxMjgsMCwzODY.jpg",
              title: "On Flee",
             
            }
            ,{
                src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ed589d99984725.Y3JvcCwxMDEzLDc5Myw0NzYsODI.jpg",
                title: "PLANET EXPRESS",
              
              },
              {
                src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/09fc11196437709.Y3JvcCwxNDAwLDEwOTUsMCw2OTM.jpg",
                title: "Our Planet Week 2024",
            
              },
              {
                src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/a85eee198453233.Y3JvcCwxMzQyLDEwNTAsMjksMA.jpg",
                title: "Astronaut, Travelling",
           
              },
              {
                src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/5790d5173029237.Y3JvcCw0MDk2LDMyMDMsMCww.jpg",
                title: "Карточки Wildberries",
                
              },
              {
                  src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/4a3617198169147.Y3JvcCwxNjE2LDEyNjQsMCww.png",
                  title: "Net Zero Economy ",
                 
                },
                {
                  src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/cb7956185441511.665a1f2c1e7f7.jpg",
                  title: "Rch content",
                  
                },
                {
                  src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fb9c22148135313.Y3JvcCwzMjk5LDI1ODEsNzMsMA.png",
                  title: " Learning Service",
                
                },
                {
                  src: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/b6e075134415455.Y3JvcCwyNjcyLDIwODksMCww.png",
                  title: "Healthcare",
                  
                }
                
  ];

  return (
      <section> 




    <div className="text-gray-600 body-font">   <div className="  py-0 mx-auto">
      
        <div className="flex flex-wrap -m-4">



          {i.map((images, index)=> 
          (
            <div key={index} className="xl:w-1/4 md:w-1/3 p-4">
                
              <div className=" p-6  hover:shadow-xl transition-shadow ">
                <img className="h-60 rounded w-full object-cover object-center mb-2" src={images.src}  onClick={() => open(images)} />
          
                <div className='flex whitespace-nowrap gap-20'> 
                <h2 className="text-sm text-gray-900 font-bold title-font mb-2 cursor-pointer hover:underline">{images.title}</h2>





<p className="leading-relaxed text-base">{images.symbol}</p>
             </div>
            </div>

            </div>


          ))}


        </div>
      </div>

      
      <Modal className="font-black"



        isOpen={isModalOpen} 

       
       
     onClose={close} 
        imageSrc={selectedImage.src} 
Like={() => Likesssss(selectedImage.src)} 
        Likee={likedImages[selectedImage.src]} 
        
      />
    </div>
    </section>
  );
};

export default Behance;