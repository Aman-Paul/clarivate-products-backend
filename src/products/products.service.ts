import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
    constructor(private prisma: PrismaService, private config: ConfigService) {}

    async getAllProducts(page: number = 1, pageSize: number = 10): Promise<{  data: any[]; total: number }> {
        try {
            const skip = (page - 1) * pageSize;
            const [data, total] = await Promise.all([
                this.prisma.product.findMany({
                    skip,
                    take: pageSize,
                    select: {
                        id: true,
                        productName: true,
                        description: true,
                        price: true,
                        stockQuantity: true,
                        createdAt: true,
                        updatedAt: true,
                        category: {
                            select: {
                                categoryName: true,
                                description: true
                            },
                        },
                    },
                }),
                this.prisma.product.count()
            ]);
    
            return { data, total };
        } catch (error) {
            console.error("Error in service:getAllProducts:", error);
            return { data: [], total: 0 };
        }
    }
    
}
