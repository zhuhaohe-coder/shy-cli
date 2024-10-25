import Item from '@/components/Item';
import useStore from '@/store';
import { Helmet } from '@modern-js/runtime/head';
import { List } from 'antd';

interface ContactsProps {
  title: string;
  source: 'all' | 'archived';
}
function Contacts({ title, source }: ContactsProps) {
  const { contacts } = useStore();
  const dataSource =
    source === 'all' ? contacts : contacts?.filter(contact => contact.archived);
  return (
    <div className="container lg mx-auto">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <List
        dataSource={dataSource}
        renderItem={info => <Item key={info.name} info={info} />}
      />
    </div>
  );
}

export default Contacts;
