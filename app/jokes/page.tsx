"use client"
import dynamic from 'next/dynamic'
import React from 'react';
import { useRouter } from 'next/navigation';
import {useJokeStore}  from "@/store/useJokeStore"
import {useAuthStore}  from "@/store/useAuthStore"
import {useZustandStore} from '@/hooks/useZustand'
import {usePagination } from '@/hooks/usePagination';

import Pagination from "../components/common/pagination";
import { paginate } from "../utils/paginate";
import Table from '../components/Table/Table';

const Button = dynamic(() => import('../components/Button/Button'), { ssr: false })

export default  function JokesComponent () {
    const router =  useRouter()
    //this below causes Error: Hydration failed because the initial UI does not match what was rendered on the server.

    const jokes = useZustandStore(useJokeStore, (state) => state.jokes)
    // const user = useZustandStore(useAuthStore, (state) => { state.auth})
    //we cant logout : error This expression is not callable. Type 'never' has no call signatures.ts(2349)
    // const logout = useZustandStore(useAuthStore, (state) => { state.logout})
    // console.log('auth', auth)
    const {logout} = useAuthStore()


    const { currentPage, pageSize, setCurrentPage, setPageSize } = usePagination()
    const paginatedJokes = paginate(jokes, currentPage, pageSize);
    const  handlePageChange = (page:number) => { setCurrentPage(page)};

    const handleLogout =  ()=>{
        logout?.()
        router.replace('/login')
    }

    return (
        <main>
        {/* @ts-ignore */}
        <Button onClick={handleLogout} text='Logout' className='logout-button'/>
        <Table data={paginatedJokes} />
        <Pagination 
            totalItems={jokes?.length} 
            pageSize={pageSize} 
            onPageChange={handlePageChange}
            setPageSize={setPageSize}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        <Button
            onClick={()=>router.push('/jokes/add')}
            text=' Add joke  '
            className='add-new-button'
        />
        </main>
    );
}