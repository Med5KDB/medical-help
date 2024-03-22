import { Layout, LayoutProps } from 'react-admin';
import { ReactQueryDevtools } from 'react-query/devtools';

export const CustomLayout = (props: LayoutProps) => (
    <>
        <Layout {...props} />
        <ReactQueryDevtools initialIsOpen={false} />
    </>
);