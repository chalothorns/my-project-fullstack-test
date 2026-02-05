import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlayHistoriesService } from './play-histories.service';
import { CreatePlayHistoryDto } from './dto/create-play-history.dto';
import { UpdatePlayHistoryDto } from './dto/update-play-history.dto';

@Controller('play-histories')
export class PlayHistoriesController {
  constructor(private readonly playHistoriesService: PlayHistoriesService) {}

  @Post()
  create(@Body() createPlayHistoryDto: CreatePlayHistoryDto) {
    return this.playHistoriesService.create(createPlayHistoryDto);
  }

  @Get()
  findAll() {
    return this.playHistoriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playHistoriesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePlayHistoryDto: UpdatePlayHistoryDto,
  ) {
    return this.playHistoriesService.update(+id, updatePlayHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playHistoriesService.remove(+id);
  }
}
