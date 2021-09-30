class Api::NotebooksController < ApplicationController

    def index
        @notebooks = current_user.notebooks
        render :index
    end

    def show
        @notebook = Notebook.find(params[:id])
        @notes = @notebook.notes
        render :show
    end

    def create
        @notebook = Notebook.new(notebook_params)

        if @notebook.save
           render :s0how
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def update
        @notebook = Notebook.find(params[:id])

        if @notebook.update(notebook_params)
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    def destroy
        @notebook = Notebook.find(params[:id])

        if @notebook.destroy
            render :show
        else
            render json: @notebook.errors.full_messages, status: 422
        end
    end

    private

    def notebook_params
        params.require(:notebook).permit(:title, :user_id)
    end

end
