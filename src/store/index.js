// merkezi state yapısı için src içinde "store" adında bir klasör ve bu klasörün içinde de "index.js" adında bir dosya oluşturulması gerekiyor. İsimlerin bu şekilde olması şart değil ancak genelde bu şekilde kullanılır.

// Öncelikle reactın kendinde bulunan "createContext" import edilir. Bu bize boş bir merkezi state oluşturma imkanı verecektir.
import { createContext } from "react";

// Boş bir merkezi state oluşturuldu ve adına da StoreContext denildi.
const StoreContext = createContext();

// Merkezi state dışarıya açıldı
export default StoreContext;