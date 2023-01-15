import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

// devtools'ta Network kısmında fetch bölümünden endpointimizi seçtiğimizde header kısmından nereye bağlandığımızı, hangi methodla bağlandığımızı, hangi cevabı aldığımızı, hangi ip ile bağlandığımızı, response header ve request headerı görebiliyoruz. Bize dönen bilgileri ise preview kısmında görüyoruz. Response kısmında gelen bilgiyi tek satır olarak gösterir.

const UserCards = () => {
    // Bize fetch ile gelen data json formatında geldiği için ve bu json bir dizi olduğu için başlangıç değerimizi boş dizi yapıyoruz.
    const [users, setUsers] = useState([])

    // Sayfa ya da veriler yüklenene kadar geçen süre zarfında bir snippet çalışsın istiyorsak ona ilişkinde ayrı bir state tanımlaması yapmak gerekiyor. Başlangıçta gözükmesini istediğimiz için true değerini veriyoruz.
    const [loading, setLoading] = useState(true)
    
    // fetch asenkron çalışan bir yapı olduğu için useEffect ile yan etkilerinden kurtarıyoruz. Sadece bir kere render olmasını sağlayacak Mounting yöntemini kullanıyoruz. UseEffect kullanmadan yapılacak bir fetch işleminde fetch işlemi bitmeden browser return kısmına geçer. Bu da ilk aşamada boş veri dönmesine sebep olur. Sonrasında ise state'de devamlı bir değişiklik olduğu düşüncesi ile de sürekli fetch'i çağırmış oluruz. Ve console da 400'lü hata görmeye başlarız. Çok fazla request gönderdin şeklinde de detayını görürüz. 400'lü hatalar frontend kaynaklı oluyordu.
    // Her defasında dönen state değerinin içi aynı olmuş olsa da dizilerde ve objelerde referans değer, her dizi ve obje için farklı olduğu için her defasında yeni bir değişiklik oluyormuş şeklinde bir algılama olacaktır ve durmadan re-render durumu gerçekleşecektir.
    // Örneğin console.log([]==[]) ya da ({}=={}) false sonucunu döndürür.
    useEffect(() => {
        // Bu verilerin gecikmeli geldiğini düşünelim ve bunu örneklendirmek istediğimizde setTimeout kullanabiliriz.
        setTimeout(() => {
            // fetch'in default method'u GET'tir eğer başka bir method kullanılacaksa , konulup {method:"post"} şeklinde kullanılabilir.
            fetch("https://63c2f147e3abfa59bdb61d76.mockapi.io/api/v1/users")
            // Cevap then'e geliyor ve json'a çeviriyoruz.
            .then(resp => resp.json())
            // json'dan şeklinde gelen cevaptan datamızı alıyoruz.
            .then(data => {
                // fetch ile aldığımız datayı useState yöntemini kullanarak ilgili state'a atıyoruz.
                setUsers(data);
                // Data geldiğinde snippet'ın kaybolmasını istediğimiz için burada state'imizi false çekiyoruz. Bunu catch finally yapısında finally kısmında da çevirebiliriz.
                // setLoading(false);
            })
            // Hata varsa ise console yazdır dedik. Ayrıca snippet'ı bu aşamada da çalıştımaya devam edebiliriz. Herhangi bir veri yüklemesinde eksik varsa snippet dönmeye devam eder.
            .catch(err => {
                console.log(err)
            })
            // Hata varsa ya da yoksa burada artık snippet'ı kaldır dedik
            .finally(() => {
                setLoading(false)
            })
        }, 1000)
    },[])

  return (
    <Container className='mt-5'>
        {/* Burada da loading true ise snippet'ı göster didyerek state ile ilişkilendirdik. */}
        {loading && <Spinner animation="border" variant="primary"/>}
        <Row className='g-4'>
            {/* fetch'den gelen datayı users state'ne attığımız için burada users state'ni map ile kullanıyoruz. */}
            {
                users.map((user) => 
                <Col key={user.id} sm={6} md={4} lg={3} xl={2}>
                    <UserCard {...user}/>
                    {/* users'ın içinde yer alan propları burada spread yöntemi ile kısaltarak yazıyoruz. */}
                </Col>)
            }
            
        </Row>
    </Container>
  )
}

export default UserCards