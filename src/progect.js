import React from 'react';
import { projectSection } from './data';

const progect = () => {
    return (
        <div>
            {/* Progect */}
            <section id="project" className="container py-10 mx-auto">
                <h1 className="text-4xl font-bold text-center md:text-5xl sm:text-left text-white font-mono px-3">
                    Project
                </h1>
                <p class="text-white font-mono font-bold sm:text-left p-3">Creative NFT Portfolio and Landing page. The theme was made with love by `frenify`</p>
                <div>

                    {projectSection?.slice(0, 5)?.map((m) => (
                        <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                            <div class="md:flex">
                                <div class="md:shrink-0">
                                    <img class="h-48 w-full object-cover md:h-full md:w-48" src={m?.proImage} alt="Man looking at item at a store" />
                                </div>
                                <div class="p-8">
                                    <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{m?.proTitle}
                                    </div>
                                    
                                    <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{m?.proImage}</a>
                                    <p class="mt-2 text-slate-500">{m?.proImage}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </section>

        </div>
    );
};

export default progect;