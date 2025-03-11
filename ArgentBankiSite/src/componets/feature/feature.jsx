import './feature.css'
import chatIcon from '../../assets/img/icon-chat.png'
import moneyIcon from '../../assets/img/icon-money.png'
import securityIcon from '../../assets/img/icon-Security.png'

const features = [
  {
    id: 1,
    imgSrc: chatIcon,
    altText: 'Chat Icon',
    title: 'You are our #1 priority',
    description:
      'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
  },
  {
    id: 2,
    imgSrc: moneyIcon,
    altText: 'Money Icon',
    title: 'More savings means higher rates',
    description: 'The more you save with us, the higher your interest rate will be!'
  },
  {
    id: 3,
    imgSrc: securityIcon,
    altText: 'Security Icon',
    title: 'Security you can trust',
    description: 'We use top of the line encryption to make sure your data and money is always safe.'
  }
]

export default function Feature() {
  return (
    <section className='features'>
      <h2 className='sr-only'>Features</h2>
      {features.map((feature) => (
        <div
          key={feature.id}
          className='feature-item'>
          <img
            src={feature.imgSrc}
            alt={feature.altText}
            className='feature-icon'
          />
          <h3 className='feature-item-title'>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  )
}
