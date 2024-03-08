'use client'
import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

type Category = typeof PRODUCT_CATEGORIES[number];

interface NavItemProps {
    category: Category
    handleOpen: () => void
    isopen: boolean
    isAnyOpen: boolean
}

const NavItem = ({ isAnyOpen, category, handleOpen, isopen }: NavItemProps) => {
    return (
        <div className='flex'>
            <div className='relative flex items-center'>
                <Button className='gap-1.5' onClick={handleOpen} variant={isopen ? 'secondary' : 'ghost'}>{category.label}</Button>
                <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', {
                    "-rotate-180":isopen,
                })}/>
            </div>
        </div>
    )
}

export default NavItem