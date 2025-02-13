import { Controller, Get, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from '@prisma/client';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get("/")
    async getAllProducts(@Query('page') page: number = 1, @Query('pageSize') pageSize: number = 10): Promise<{  data: any[]; total: number }> {
        try {
            const products = await this.productsService.getAllProducts(page, pageSize);
            return products;
        } catch (error) {
            console.error("Error in service:getAllProducts:", error);
            return { data: [], total: 0 };
        }
    }
    
}
