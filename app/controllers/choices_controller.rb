class ChoicesController < ApplicationController
  before_action :set_choice, only: [:edit, :update]
  def new
    @choice = Choice.new
    @locations = Location.all # すべての場所を取得
  end

  def create
    @choice = Choice.new(choice_params)
    if @choice.save
      redirect_to root_path, notice: '選択肢が正常に作成されました。'
    else
      @locations = Location.all
      render :new
    end
  end

  def edit
    @locations = Location.all # すべての場所を取得
  end

  def update
    if @choice.update(choice_params)
      redirect_to some_path, notice: '選択肢が正常に更新されました。'
    else
      @locations = Location.all
      render :edit
    end
  end

  private

  def set_choice
    @choice = Choice.find(params[:id])
  end

  def choice_params
    params.require(:choice).permit(:choice_name, :location_id)
  end
end
