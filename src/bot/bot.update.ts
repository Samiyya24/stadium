import {
  // Action,
  // Command,
  Ctx,
  On,
  // Hears,
  // On,
  Start,
  Update,
} from 'nestjs-telegraf';
import {
   Context,//  Markup 
  } from 'telegraf';
import { BotService } from './bot.service';

@Update()
export class BotUpdate {
  constructor(private readonly botService: BotService) {}
  @Start()
  async onStart(@Ctx() ctx: Context) {
    await this.botService.start(ctx);
  }

  @On('contact')
  async onContact(@Ctx() ctx: Context) {
    await this.botService.onContact(ctx)
  }

  // @On('photo')
  // async onPhoto(@Ctx() ctx: Context) {
  //   if ('photo' in ctx.message) {
  //     console.log(ctx.message.photo);
  //     await ctx.replyWithPhoto(
  //       String(ctx.message.photo[ctx.message.photo.length - 1].file_id),
  //     );
  //   }
  // }

  // @On('video')
  // async onVideo(@Ctx() ctx: Context) {
  //   if ('video' in ctx.message) {
  //     console.log(ctx.message.video);
  //     await ctx.reply(String(ctx.message.video.file_name));
  //   }
  // }

  // @On('sticker')
  // async onSticker(@Ctx() ctx: Context) {
  //   if ('sticker' in ctx.message) {
  //     console.log(ctx.message.sticker);
  //     await ctx.reply('👍🏾👍🏾');
  //   }
  // }

  // @On('animation')
  // async onAnimation(@Ctx() ctx: Context) {
  //   if ('animation' in ctx.message) {
  //     console.log(ctx.message.animation);
  //     await ctx.reply('Animation');
  //   }
  // }

  // @On('location')
  // async onLocation(@Ctx() ctx: Context) {
  //   if ('location' in ctx.message) {
  //     console.log(ctx.message.location);
  //     await ctx.reply(String(ctx.message.location.latitude));
  //     await ctx.reply(String(ctx.message.location.longitude));
  //     await ctx.replyWithLocation(
  //       Number(ctx.message.location.latitude),
  //       Number(ctx.message.location.latitude),
  //     );
  //   }
  // }

  // @On('voice')
  // async onVoice(@Ctx() ctx: Context) {
  //   if ('voice' in ctx.message) {
  //     console.log(ctx.message.voice);
  //     await ctx.reply(String(ctx.message.voice.duration));
  //   }
  // }

  // @On('invoice')
  // async oninvoice(@Ctx() ctx: Context) {
  //   if ('invoice' in ctx.message) {
  //     console.log(ctx.message.invoice);
  //     await ctx.reply(String(ctx.message.invoice.title));
  //   }
  // }

  // @On('document')
  // async onDocument(@Ctx() ctx: Context) {
  //   if ('document' in ctx.message) {
  //     console.log(ctx.message.document);
  //     await ctx.reply(String(ctx.message.document.file_name));
  //   }
  // }

  // @Hears('hi')
  // async hearsHi(@Ctx() ctx: Context) {
  //   await ctx.reply('Hey there');
  // }

  // @Command('help')
  // async helpCommand(@Ctx() ctx: Context) {
  //   await ctx.reply('Ertaga aytaman');
  // }

  // @Command('inline_keyboard')
  // async inlineButton(@Ctx() ctx: Context) {
  //   const inlineKeyboard = [
  //     [
  //       {
  //         text: 'Button 1',
  //         callback_data: 'button1',
  //       },
  //       {
  //         text: 'Button 2',
  //         callback_data: 'button2',
  //       },
  //       {
  //         text: 'Button 3',
  //         callback_data: 'button3',
  //       },
  //     ],
  //     [
  //       {
  //         text: 'Button 4',
  //         callback_data: 'button4',
  //       },
  //     ],
  //     [
  //       {
  //         text: 'Button 5',
  //         callback_data: 'button5',
  //       },
  //     ],
  //   ];
  //   ctx.reply('Inline buttonni tanlang', {
  //     reply_markup: {
  //       inline_keyboard: inlineKeyboard,
  //     },
  //   });
  // }

  // @Action('button1')
  // async onActionButton1(@Ctx() ctx: Context) {
  //   await ctx.reply('button 1 bosildi');
  // }

  // @Action('button2')
  // async onActionButton2(@Ctx() ctx: Context) {
  //   await ctx.reply('button 2 bosildi');
  // }

  // @Action(/button+[1-9]/)
  // async onActionButton3(@Ctx() ctx: Context) {
  //   await ctx.reply('Any button bosildi');
  // }

  // @Command('main_keyboard')
  // async mainButton(@Ctx() ctx: Context) {
  //   await ctx.reply('Main buttonni tanla:', {
  //     parse_mode: 'HTML',
  //     ...Markup.keyboard([
  //       ['bir', 'ikki', 'uch'],
  //       ["to'rt"],
  //       [Markup.button.contactRequest('telefon raqamni yuboring 📞')],
  //       [Markup.button.locationRequest('Locationningizni yuboring 📍')],
  //     ]).resize(),
  //     // .oneTime(),
  //   });
  // }
  // @Hears('bir')
  // async hearsBir(@Ctx() ctx: Context) {
  //   await ctx.reply('bir bosildi');
  // }

  // @On('text')
  // async onText(@Ctx() ctx: Context) {
  //   console.log(ctx);

  //   if ('text' in ctx.message) {
  //     if (ctx.message.text == 'Assalamu alaykum') {
  //       await ctx.replyWithHTML('<b> Va alaykum assalamu </b>');
  //     } else {
  //       await ctx.replyWithHTML(ctx.message.text);
  //     }
  //   }
  // }

  // @On('message')
  // async onMessage(@Ctx() ctx: Context) {
  //   console.log(ctx.botInfo);
  //   console.log(ctx.chat.id);
  //   console.log(ctx.from.first_name);
  // }
}
