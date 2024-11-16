'use client'
import React from 'react'
import Link from 'next/link'
import moment from "moment";
import Image from 'next/image';
import { imageUrl, imageUrlAlt } from '@/app/utilities/ImagePath';
export default function Post({ data, activeIndex, scrollX }) {

  const imageLoader = ({ src }) => {
    return src
  }
  console.log(data.slug,'rdqweqweqweqwe')
  return (
    <>

      <div>
        <Link href={`/posts/${data.slug}`}>
          <div className="mb-6 block h-[236px]">
            {data.coverImage ?
              <img
                loader={imageLoader}
                src={`${data.coverImage}`}
                alt="spurtCMS card image"
                width={1000}
                height={1000}
                priority
                layout="responsive"
                blurDataURL={`${data.coverImage}`}
                className='h-full-imp'
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "/img/no-image.png";
              }}
              />
              :

              <Image
                loader={imageLoader}
                src={`/img/no-image.png`}
                alt="spurtCMS card image"
                width={1000}
                height={1000}
                priority
                layout="responsive"
                className='h-full-imp'
              />
            }
          </div>
          <h1 className="text-3xxl font-bold line-clamp-2 text-black hover:underline   leading-[2.625rem] line-clamp-2"> {data.title}</h1></Link>
        <p className="text-base text-black my-3">{moment(data.createdOn).format("MMM DD, YYYY")} </p>
        <div className="text-lg text-current  font-light line-clamp-3 mb-3 desc">
          <div dangerouslySetInnerHTML={{ __html: data?.description.replaceAll("<br>", " ") }}></div>
        </div>
        <div className="flex items-center gap-x-2">
          <div class="flex items-center justify-center relative h-8 w-8 overflow-hidden rounded-full bg-slate-300">
            {data?.authorDetails?.profileImagePath == "" || data?.authorDetails?.profileImagePath == null ?
              <>
                {data?.authorDetails?.FirstName ?
                  <span className="text-3xxl text-white">{data?.authorDetails?.firstName == "" || data?.authorDetails?.firstName == null ? data?.authorDetails?.firstName?.[0] : ""}</span>
                  :
                  <Image
                    loader={imageLoader}
                    src={`/img/user1.jpg`}
                    alt="spurtCMS Profile Image"
                    width={32}
                    height={32}
                    priority
                  />}</>
              : <img
                loader={imageLoader}
                src={`${imageUrl}${data?.authorDetails?.profileImagePath}`}
                alt="spurtCMS Profile Image"
                width={32}
                height={32}
                priority

              />
            }
          </div>
          <div className="">
            <a className="text-primary text-base"> {data?.authorDetails?.firstName} {data?.authorDetails?.lastName} </a>
          </div>
        </div>
      </div>

    </>
  )
}
