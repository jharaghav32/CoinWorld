import React from 'react'
import millify from 'millify'
import { Card,Row,Col} from 'antd'
import { useGetCryptoByNameQuery } from '../services/cryptoApi'
import Loader from './Loader'
const Cryptocurrencies = ({simplified}) => {
  
  const count = simplified?10:50;
  const {data,isFetching} = useGetCryptoByNameQuery(count);
  
  const cryptos = data?.data?.coins
  if(isFetching)return <Loader/>

  
  return (
    <>
    <Row gutter={[22 ,22]} className='crypto-card-container'>
    {cryptos?.map((coin)=>(
       <Col xs={24} sm={12} lg={6} className="crypto-card" key={coin.uuid}>
                                 
              <Card
                title={`${coin.rank}. ${coin.name}`}
                extra={<img className="crypto-image" src={coin.iconUrl} alt="" />}
                hoverable
              >
                <p>Price: {millify(coin.price)}</p>
                <p>Market Cap: {millify(coin.marketCap)}</p>
                <p>Daily Change: {coin.change}%</p>
                <a href={coin.coinrankingUrl} target="_blank" rel="noreferrer">Details</a>
              </Card>
            
       </Col>
    ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies