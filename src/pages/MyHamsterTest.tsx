import { results } from '../data/results';
import { HamsterTable } from '../components/Form';

const title = "角色總覽"
const headers = ['角色', '特質簡介', '標籤', '合得來', '不合'];
const data = Object.values(results);

export default function MyHamsterTest() {
    return (
        <div>
            <HamsterTable title={title} headers={headers} data={data} />
        </div>
    );
}