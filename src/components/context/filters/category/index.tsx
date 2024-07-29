// React imports
import { useState, useEffect, useContext, createContext } from 'react';

const CategoryContext: React.Context<any> = createContext(null)

export const useCategory = () => {
	return (
		useContext(CategoryContext)
	)
}

export const CategoryProvider = ({children}: any) => {
	const [ currentView, setCurrentView ] = useState("oferta");
	const [ categoryId, setCategoryId ] = useState(1);

	const categoryDict: any = {
		1: "oferta",
		2: "dem",
	}

	useEffect(() => {
		setCurrentView(categoryDict[categoryId]);
	}, [ categoryId ]);
	
	return (
		<CategoryContext.Provider value={{
			categoryDict,
			currentView, setCurrentView,
			categoryId, setCategoryId,
		}}>
			{children}
		</CategoryContext.Provider>
	)
}

CategoryContext.displayName = "CategoryContext";