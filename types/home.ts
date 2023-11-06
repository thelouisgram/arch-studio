export interface MyState {
    data?: any;
    isLoading: boolean;
    fetchErrorValue: '';
    fetchError: boolean;
}

export interface PaginationProps{
    page: number;
    setPage: (page:number) => void;
}

export interface BannerProps{
    data?: any;
}

export interface SliderProps {
    data?: any;
    page: number;
}