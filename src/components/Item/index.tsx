import Avatar from '@/components/Avatar';
import useStore from '@/store';
import { cn } from '@/utils';

type InfoProps = {
  avatar: string;
  name: string;
  email: string;
  archived?: boolean;
};

function Item({ info }: { info: InfoProps }) {
  const { avatar, name, email, archived } = info;
  const { setArchived } = useStore();
  return (
    <div className={cn('flex p-4 items-center border-gray-200 border-b')}>
      <Avatar src={avatar} />
      <div className={cn('ml-4 flex-1 flex justify-between custom-text-gray')}>
        <div className="flex-1">
          <p>{name}</p>
          <p>{email}</p>
        </div>
        <button
          type="button"
          disabled={archived}
          className={cn(
            'bg-blue-500 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 disabled:bg-gray-300 disabled:text-gray-500',
          )}
          onClick={() => setArchived(info)}
        >
          {archived ? 'Unarchive' : 'Archived'}
        </button>
      </div>
    </div>
  );
}

export default Item;
