import { useSearchParams} from "react-router-dom"
export default function RoutePage2() {
    const [params,setParams] = useSearchParams();
    console.log(params.get('item1'))
  return (
    <div>
        RoutePage2 {params.get('item2')}
    </div>
  )
}
