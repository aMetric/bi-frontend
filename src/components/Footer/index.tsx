import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';
const Footer: React.FC = () => {
  const defaultMessage = '智能BI';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      // copyright={`${currentYear} ${defaultMessage}`}
      copyright={
        <>
          {`${currentYear} ${defaultMessage} | `}
          <a href="http://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">
            皖ICP备2023017853号
          </a>
        </>
      }
      links={[
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/aMetric',
          blankTarget: true,
        },
        {
          key: '智能BI',
          title: '智能BI',
          href: 'https://github.com/aMetric',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
