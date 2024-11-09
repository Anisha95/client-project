import React from 'react';
import './Listing.css';
import ImageContainer from '../components/ImageContainer/ImageContainer';
import ProjectDisplay from '../components/ProjectDisplay/ProjectDisplay';
import TotalArea from '../../assets/icons/totalArea.svg';
import CarpetArea from '../../assets/icons/carpetArea.svg';
import FloorsIcon from '../../assets/icons/floors.svg';
import PriceSqFoot from '../../assets/icons/price.svg';
import BedroomIcon from '../../assets/icons/bedroom.svg';
import HallIcon from '../../assets/icons/hall.svg';
import Kitchen from '../../assets/icons/kitchen.svg' ;
import Toilet from '../../assets/icons/toilet.svg';
import Deck from '../../assets/icons/deck.svg';
import ConstructionIcon from '../../assets/icons/construction.svg';

const Listing = () => {
  const data= {
    title: 'Glass House 70 - Log Cabin',
    description: 'Wooden Cottage',
    images: [
      'https://s3-alpha-sig.figma.com/img/fed0/ffec/596a560249adc49d3237a2eaf7cb0fb2?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=h8cZGXWc2TK5U-eBtSEIxtOQdrooUUuMbEInDv0Af-7Dc2jbPZT14dHD1UFX2kdv3aLb4Bk0AI2KjLw8NgDVNbkucbcYv5QLJc-argj0t23f7PDpItV~puQenUnQLG3197BYUQuT9HDWjnJv~mJ8GcKLPj~sjCZO~bfc8Erh29i7t55DKMy54bUC5rPI63dD5jx2avf9MUkAFc1kTEau2n-U4aPSqFtt3fwwKvjlhdVMzt0kjtsQEJJ72enEay2oevUFXDkGkRhItcXiUmsp2-M3rGycUDGXj0H-zh0jj~lmgsswE-CfoAUK4C5SvsbJJdlu7y0pW-gyLCdP5CJ9jA__',
    'https://s3-alpha-sig.figma.com/img/177c/5311/b69afaea74d2e115cb77da19740b480d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRbNrTuACvEG24UnF54Y6Q5LlGbWsFM2NBl7TGUrMksgCEVhen9LVFhzMDE24h3ui-wCQeZyHxJQyfPkzVckikElglgSmK4YxUCrapRmvxwyaolK5cSReczPQipDSGcYqtgimjfgenva8dXClGABT1T9huPS5vwrI7m-JQd9UFFj3z2OWQ5ajzJhX0uq6pzaA3pwkEjLDSXN5QE3Yanon5OneC9ZQJyXFd~CBnYf-gFa9S-m63k9TLOT7FusIwDFXiEWjN-JX--xRCqhqL3xghnmJ7hlgV~Nfsv9ThaC4msUPHJhXz6f0j6yAIJCqGJBLKYaaxYkkiHKzQX-ZgFPEQ__',
   
    'https://s3-alpha-sig.figma.com/img/02b6/8705/cac4c09a2d23d3b0d8e71f4eeca86dda?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RsFcnfGPUbGCZgdUe-gbtZCvb3rF~kJIfafuUcnbYRsAXa24x8CPvj5zC3HS4bJZjjSevoLbOxT1bmiSENdE8ZfNCuuj6g-nBd3glMFbaFMdk3xMNB2dYkz1pNO338oPyctSeLyYk18Dx7OX7LokR9imOoKLVYOLjjnPfaOsgWZDyOSNpfmyNGC7p6PuSXDflRNS0eWMJRUd~HTHgDrUpx1DL3BeBbhvwZCukLimxQYSoOyxgR4xmgKwJIk2uBNe7N~mKzN5IK9uuZ1mBZ-R8n4q~qCQxFVMDOalRxo5y9DaN4dgg2XoKiJZ5gwzG38kotyrdDWQq2j~PqbK9HxH2g__',
  'https://s3-alpha-sig.figma.com/img/100b/5849/e753e438c8b4ada1120f76bf900f03b3?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Fu7mhlI8HD1T09MladtGdTqu3xfNZU-X6afwwVo3tzkJS1MXV4R2myaQ~bb7xMQaNW7DRwDg2MojIMPES5NZgkXEbnELbj6FC98eoKNOYFy8fzyXeRpkvH7RiftOrlHZP7T9~Akapt2nkcy8aDVypPHcwbVNH-w~QahB7EkRbUx830T8x65~H3l8BB5BmlvAq6LfoyjhAXjHHp~Amio1Vw8MlvLDG1V5xi9z-zqzwZbMyhUKKQH4oar7V3ykt0cRDwpsL2rxBOmfwQaZ-CtT8zDdkKj1LhFqSGb18uOy70HpMheOss6FQ8wwmylEsHGZ-AJQkqNP-UGcVMOibnUzYA__'  ,
  'https://s3-alpha-sig.figma.com/img/c06e/35f8/eefd25c7a1db7343dce4f1f4fe79392d?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g1DAxW-5KnnyZL2Y3sQhSdzGdWxUNfVJF4~kfMB9GvNrc2yEBTsk2iMZpDBp4HLWU9PorII8zXD03Iii4b9UDlfvkw5Mxb2Y0XriNw2Ih~nFrlCaAJA9pK3y~IUXM0EENrCBMh0qywryWNBQTL8S7A~014okhOjfEelLCs9DEVM5Vg3JRX8afRYQjuPqUcIABezxKWHectYRu~CaG3ChyWxk42roELGjEjpSqvQgZdxa8lyWdwvoOJdtX4rIuSr1DloWW-kYWCD7FyES2apU5RpLaribuKrSDh7CgYsGMQ8cOYlEvf~qbAkWAsaGvVmWRS09yYps4u4jtv2pLUOLeg__',
  'https://s3-alpha-sig.figma.com/img/b563/0fa7/39f28e8eed70814d8f3046da582562b7?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CTbDD3j~rRmozUtgIE1moa3UiSeZAhso7odWefpX2llfGWrXmmlKyfk7LIUxJJsj45NZzmoZz3-dGkEtT-L7ye~Y~Pj3IDI3vttd4ZglwHBMqsWmeUmBogR5gNkwGFbeuWjw2exdZ-F~SXI3w6~Rqe8997UGTgDfJxb7KM5DYa-1YsJTl0riQ46iNeS6R8jjF8K4z1vlitC7Xu4CAirgv7tNoZwGK5f6NqWsQMu8xgxCHtbq3XFZj~NGUfD2feUgb0ieAGzILioKonaJvXBcHQGFw~ywO0WM-UNLboT1L2ieomTDt3w85s79UHnJPSOmMorYeck3qn3znv17wudJ3w__',
  ],
  projectDetails: {
    1: [TotalArea, 'Total Area', '40*50 sqft'],
    2: [CarpetArea, 'Carpet Area', '40*50 sqft'],
    3: [FloorsIcon, 'Floors', 1],
    4: [PriceSqFoot, 'Price /sqft', 'Rs 42,00,000'],
    5: [BedroomIcon, 'No. of Bedrooms', 1],
    6: [HallIcon, 'No. of Halls', 1],
    7: [Toilet, 'No. of Toilet', 1],
    8: [Deck, 'No. of Deck', 1],
    9: [Kitchen, 'No of Kitchen', 1],
    10: [ConstructionIcon, 'Type of Construction', 'Residential']
  }
  }
  return (
    <div className='listing-page'>
      <ImageContainer title={data?.title} description={data?.description} />
      <ProjectDisplay imagesList={data?.images} projectDetails={data?.projectDetails} />
    </div>
  )
}

export default Listing