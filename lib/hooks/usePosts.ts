'use client';
import { useQuery } from '@tanstack/react-query';

import { getPosts } from '../services/post.service';

export const usePosts = ()=>{
    return useQuery({
        queryKey:['posts'],
        queryFn:getPosts
    })
}