import React from 'react'
import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetNewsByNameQuery } from '../services/newsApi'
import moment from 'moment';
import Loader from './Loader';
const { Text } = Typography;
const News = ({ simplified }) => {
  const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
  const d = new Date();
  const { data, isFetching } = useGetNewsByNameQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 10 });
  if (isFetching) return <Loader/>;
  
  return (
    <>
    {!simplified && <div className='home-heading-container'>
    <Typography.Title level={2} className="home-title">Latest Crypto News</Typography.Title>
      </div>}
      <Row gutter={[24, 24]}>
        {data.value.map((news) => (
          <Col xs={24} sm={12} lg={8} key={2}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Typography.Title className="news-title" level={4}>{news.name}</Typography.Title>
                  <img src={news?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                </div>
                <p>{news.description.length > 100 ? `${news.description.substring(0, 100)}...` : news.description}</p>
                <div className="provider-container">
                  <div>
                    <Avatar src={news.provider[0]?.image?.thumbnail?.contentUrl || demoImage} alt="" />
                    <Text className="provider-name">{news.provider[0]?.name}</Text>
                  </div>
                  <Text>{moment(news.datePublished).fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default News